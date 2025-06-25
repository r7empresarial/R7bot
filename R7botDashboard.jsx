import { useState } from 'react';

export default function R7botDashboard() {
  const [botName, setBotName] = useState('');
  const [trigger, setTrigger] = useState('');
  const [response, setResponse] = useState('');

  const handleSave = () => {
    alert(`Bot salvo!\nNome: ${botName}\nGatilho: ${trigger}\nResposta: ${response}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🤖 R7bot - Painel de Controle</h1>
      <input placeholder='Nome do Bot' value={botName} onChange={e => setBotName(e.target.value)} />
      <input placeholder='Palavra-chave' value={trigger} onChange={e => setTrigger(e.target.value)} />
      <textarea placeholder='Resposta do Bot' value={response} onChange={e => setResponse(e.target.value)} />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}