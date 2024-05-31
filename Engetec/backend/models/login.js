const db = require("./index")

function login(email, senha, callback) {
    // Query para selecionar o usuário com o email e senha fornecidos
    const query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;
  
    connection.query(query, [email, senha], (error, results) => {
      if (error) {
        return callback(error, null);
      }
  
      if (results.length === 0) {
        // Se nenhum usuário corresponder, o login falhou
        return callback(null, false);
      } else {
        // Se um usuário corresponder, o login é bem-sucedido
        return callback(null, true);
      }
    });
  }
  
  // Exemplo de uso
  const email = 'usuario@example.com';
  const senha = 'senha123';
  
  login(email, senha, (error, success) => {
    if (error) {
      console.error('Erro durante o login:', error);
    } else {
      if (success) {
        console.log('Login bem-sucedido!');
      } else {
        console.log('Email ou senha incorretos. Login falhou.');
      }
    }
  
    // Fechar a conexão com o banco de dados após o uso
    connection.end();
  });