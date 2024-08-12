import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { deleteAddress, fetchUsers, fetchUserById } from '../../redux/user/slice'

export function Home() {
  const dispatch = useDispatch();
  const { user, users, loading } = useSelector(rootReducer => rootReducer.user)
  
  console.log(user)

  function handleDeleteAddress(){
    dispatch(deleteAddress());
    alert("Endereço deletado com sucesso!")
  }

  function handleFetchUsers(){
    dispatch(fetchUsers())
  }

  function handleFetchUserById(){
    dispatch(fetchUserById(5));
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user? user?.name : 'Visitante'}, bem vindo!
            </h1>

            <span>Email: {user ? user?.email : '...'}</span>

            {user && user?.address && (<div className={styles.address}>
              <strong className={styles.addressLabel}>Endereço atual:</strong>
              <p>{user.address.location}, n {user.address.number}</p>
              
              <button onClick={handleDeleteAddress}>Deletar endereço</button>
            </div>
            )}

            <hr />
            <br/>
            <h2>Lista de usuários</h2>
            <button onClick={handleFetchUsers}>Buscar usuários</button>
            <button onClick={handleFetchUserById}>Buscar usuário</button>
            <br/>
            {loading && <strong>Carregando usuários...</strong>}
            {!loading && users?.map(user => (
              <div key={user.id}>
                <p>ID: {user?.id} | {user.name}</p>
              </div>
            ))}
          </div>

        </main>
      </div>
    </>
  )
}
