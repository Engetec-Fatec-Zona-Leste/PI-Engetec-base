import { logout } from "@/_actions/sessions";

export async function GET() {
    try {
        await logout()
        return Response.json({ message: 'Logout feito com sucesso' })

    } catch (error) {

        return Response.json({ error: error })
    }
}