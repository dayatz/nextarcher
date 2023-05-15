import Card from "~/components/Card";
import LoginForm from "./LoginForm";


export const metadata = {
  title: 'Next Archer | Login',
}

export default function LoginPage() {
  return (
    <main className="grid place-items-center h-full px-2">
      <div>
        <h1 className="mb-2 text-xl ml-[1px]">Silahkan Login</h1>
        <Card>
          <LoginForm />
        </Card>
      </div>
    </main>
  )
}
