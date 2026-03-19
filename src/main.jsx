//Esse arquivo é o main.jsx, ele é o ponto de entrada da aplicação, ou seja, é o primeiro arquivo que é executado quando a aplicação é iniciada, e ele tem a função de renderizar o componente App dentro do elemento com id root, que está no index.html, e o StrictMode é um componente do React que ativa verificações adicionais e avisos para seus descendentes, ele é usado para ajudar a identificar problemas potenciais na aplicação durante o desenvolvimento, mas não tem efeito em produção.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App é um componente */}
    <App />
  </StrictMode>
)
