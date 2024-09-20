import Link from "next/link"

export default function Menu() {
  return (
    <>
    <nav>
            <div>
                <h2>Meu Site</h2>
            </div>
            <nav>
                <ul className="flex">
                    <li><Link href={"/"} >Home</Link></li>
                </ul>
            </nav>
            <div>
                <button>Entrar</button>
                <button>Cadastre-se</button>
            </div>
        </nav>
    </>
  )
}