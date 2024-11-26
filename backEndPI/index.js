require('dotenv').config();
const express = require('express');
const { sequelize } = require('./model/db');
const authRoutes = require('./routes/geral/autenticacao/auth');
const authMiddleware = require('./routes/geral/autenticacao/middleware');
const middlewareEvento = require('./routes/novo/middlewareEvento');
const cors = require('cors');



const app = express();

app.use(
  cors({
      origin: 'http://localhost:3001', // Permitir apenas o front-end
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  })
);

// Caso queira liberar para qualquer origem (apenas em desenvolvimento)
// app.use(cors());

app.use(express.json());
app.use("/uploads", express.static('uploads'));
app.use(express.json());

app.use('/auth', authRoutes);


const instituicao = require('./routes/geral/instituicao')
app.use('/instituicao', instituicao)

const download = require('./routes/evento/artigos/download')
app.use('/download', authMiddleware(["Admin", "Autor"]), download)

const distribuicao = require('./routes/evento/artigos/districuicao')
app.use('/distribuicao', distribuicao)


const home = require("./routes/novo/home")
app.use('/home', authMiddleware(["Admin", "Autor"]), home)

const validar = require("./routes/geral/autenticacao/validacao/validar")
app.use("/controle", authMiddleware(["Admin"]), validar )


const validarOrg = require("./routes/geral/autenticacao/validacao/validarOrganizador")
app.use("/controle/editorchefe", authMiddleware(['Editor Chefe', "Admin"]), validarOrg )

// Rotas protegidas por tipos de usuário
const evento = require('./routes/evento/evento');
app.use('/evento', authMiddleware(['Admin']), evento );

// Rotas protegidas por tipos de usuário
const authEvento = require('./routes/evento/authEvento');
app.use('/authEvento', authMiddleware(["Admin", "Autor"]), authEvento );

const areas = require('./routes/evento/artigos/areas');
app.use('/area', authMiddleware(['Editor Chefe', "Admin"]), areas );

const artigos = require('./routes/evento/artigos/artigo');
app.use('/artigos', middlewareEvento(['Autor', "Admin"]), artigos );

const distribuir = require('./routes/evento/artigos/districuicao');
app.use('/distribuir', middlewareEvento(["Admin", "Editor Chefe"]), distribuir );



// Rotas protegidas por tipos de usuário
const foi = require('./routes/novo/foi');
app.use('/foi', middlewareEvento(['Editor Chefe']), foi );

const PORT = process.env.PORT || 3031;
app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`Server running on port ${PORT}`);
});
