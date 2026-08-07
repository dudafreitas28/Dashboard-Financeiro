// Navegação lateral interativa
const navLinks = document.querySelectorAll('.sidebar-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Atualização dinâmica do Saldo ao clicar no card
const cardSaldo = document.getElementById('card-saldo');
const saldoValue = cardSaldo.querySelector('.card-value');
let saldoAtual = 12450.00;

cardSaldo.addEventListener('click', () => {
    saldoAtual += 500.00;
    saldoValue.innerText = `R$ ${saldoAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    
    cardSaldo.style.borderColor = '#6366f1';
    setTimeout(() => {
        cardSaldo.style.borderColor = '#1f2937';
    }, 500);
});

// Notificação interativa
const notificacaoBtn = document.querySelector('.user-profile span');
notificacaoBtn.addEventListener('click', () => {
    alert('Nenhuma nova notificação pendente. Sistema 100% atualizado!');
});