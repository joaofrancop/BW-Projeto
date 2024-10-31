// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    listarProdutos();
    listarClientes();
    listarFornecedores();
});

// Função para adicionar produto ao LocalStorage e listar
function adicionarProduto() {
    const nome = document.getElementById('produtoNome').value;
    const preco = parseFloat(document.getElementById('produtoPreco').value);
    const id = parseInt(document.getElementById('produtoID').value); // Converte o id para um número inteiro
    const qtd = document.getElementById('produtoQuantidade').value;

    // Verificação de preenchimento dos campos e se são números
    if (!nome || isNaN(preco) || isNaN(id)) { 
        alert('Por favor, preencha todos os campos corretamente com valores numéricos.');
        return;
    }

    // Adiciona o produto ao LocalStorage
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push({ nome, preco, id, quantidade: qtd });
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Atualiza a lista e limpa o formulário
    listarProdutos();
    document.getElementById('produtoForm').reset();
}

// Função para listar produtos
function listarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produtoLista = document.getElementById('produtoLista');
    produtoLista.innerHTML = produtos.map((produto, index) => `
        <tr>
            <td>${produto.nome}</td>
            <td>${produto.preco.toFixed(2)}</td>
            <td>${produto.id}</td>
            <td>${produto.quantidade}</td>
            <td>
                <button onclick="editarProduto(${index})">Editar</button>
                <button onclick="excluirProduto(${index})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

// Função para editar produto
function editarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    document.getElementById('produtoNome').value = produtos[index].nome;
    document.getElementById('produtoPreco').value = produtos[index].preco;
    document.getElementById('produtoID').value = produtos[index].id;
    document.getElementById('produtoQuantidade').value = produtos[index].quantidade;
    excluirProduto(index); // Exclui o produto antigo antes de adicionar o novo
}

// Função para excluir produto
function excluirProduto(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    listarProdutos();
}

// Função para adicionar cliente ao LocalStorage e listar
function adicionarCliente(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('clienteNome').value;
    const email = document.getElementById('clienteEmail').value;
    const data = document.getElementById('data').value;
    const CPF = document.getElementById('CPF').value;

    if (nome && email && data && CPF) {
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.push({ nome, email, data, CPF });
        localStorage.setItem('clientes', JSON.stringify(clientes));
        listarClientes();
        document.getElementById('clienteForm').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Função para listar clientes
function listarClientes() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const clienteLista = document.getElementById('clienteLista');
    clienteLista.innerHTML = clientes.map((cliente, index) => `
        <tr>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.data}</td>
            <td>${cliente.CPF}</td>
            <td>
                <button onclick="editarCliente(${index})">Editar</button>
                <button onclick="excluirCliente(${index})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

function editarCliente(index) {
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    document.getElementById('clienteNome').value = clientes[index].nome;
    document.getElementById('clienteEmail').value = clientes[index].email;
    document.getElementById('data').value = clientes[index].data;
    document.getElementById('CPF').value = clientes[index].CPF;
    excluirCliente(index);
}

function excluirCliente(index) {
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    listarClientes();
}

// Funções para adicionar, listar, editar e excluir fornecedores
function adicionarFornecedor() {
    const nome = document.getElementById('fornecedorNome').value;
    const contato = document.getElementById('fornecedorContato').value;
    const CEP = document.getElementById('CEP').value;

    if (nome && contato && CEP) {
        const fornecedores = JSON.parse(localStorage.getItem('fornecedores')) || [];
        fornecedores.push({ nome, contato, CEP });
        localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
        listarFornecedores();
        document.getElementById('fornecedorForm').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function listarFornecedores() {
    const fornecedores = JSON.parse(localStorage.getItem('fornecedores')) || [];
    const fornecedorLista = document.getElementById('fornecedorLista');
    fornecedorLista.innerHTML = fornecedores.map((fornecedor, index) => `
        <tr>
            <td>${fornecedor.nome}</td>
            <td>${fornecedor.contato}</td>
            <td>${fornecedor.CEP}</td>
            <td>
                <button onclick="editarFornecedor(${index})">Editar</button>
                <button onclick="excluirFornecedor(${index})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

function editarFornecedor(index) {
    const fornecedores = JSON.parse(localStorage.getItem('fornecedores'));
    document.getElementById('fornecedorNome').value = fornecedores[index].nome;
    document.getElementById('fornecedorContato').value = fornecedores[index].contato;
    document.getElementById('CEP').value = fornecedores[index].CEP;
    excluirFornecedor(index);
}

function excluirFornecedor(index) {
    const fornecedores = JSON.parse(localStorage.getItem('fornecedores'));
    fornecedores.splice(index, 1);
    localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
    listarFornecedores();
}

// Função para logout
function logout() {
    window.location.href = '../index.html';
}
