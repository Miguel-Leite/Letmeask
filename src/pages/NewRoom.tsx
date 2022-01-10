import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'

import { AuthContext } from '../contexts/AuthContext'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'

export function NewRoom() {
    // const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="illustration simbolizando pergunta e resposta" />
                <strong>Crei uma sala de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="lemeask" />
                    {/*<h1> {user?.name} </h1>*/}
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />

                        <Button type="submit">
                            Criar sala
                        </Button>
                        <p>
                            Quer entrar em uma sala existente?  <Link to='/'>clique aqui</Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>       
    );
}