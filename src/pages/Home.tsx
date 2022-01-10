import { useHistory } from 'react-router-dom'


import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom(){
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/room/new')
    }

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Criei sua sala com google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />

                        <Button type="submit">
                            Entrar na sala
                        </Button>
                        <p>
                            Quer entrar em uma sala existente? <a href="#">clique</a>
                        </p>
                    </form>
                </div>
            </main>
        </div>       
    );
}