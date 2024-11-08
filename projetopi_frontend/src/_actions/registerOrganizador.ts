// src/_actions/registerInstituicao.ts
'use server';


export const registerOrganizador = async (formData: FormData, idEvento: string) => {

    console.log(
        formData.get('grande-area'), //id grande area
        formData.get('area'), // id area
        formData.getAll('sub-area[]') // to get all values of a input with the same name
    )

}
