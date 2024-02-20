export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number
    imagem: string;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Logitech Lightspeed", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg",quantidadeEstoque:15},
    { id: 2, descricao: "Monitor Apple", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "/assets/monitor-1.jpg" ,quantidadeEstoque:22},
    { id: 3, descricao: "Teclado Baseus sem fio", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-1.jpg",quantidadeEstoque:7},
    { id: 4, descricao: "HeadSet Baseus Hq2", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg" ,quantidadeEstoque:3},
    { id: 5, descricao: "Apple Airpads", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-1.jpg",quantidadeEstoque:14},
    { id: 6, descricao: "Headset Beats Mr. Beat", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-3.jpg",quantidadeEstoque:35},
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/hd.jpg",quantidadeEstoque:12},
    { id: 8, descricao: "Placa de video GTX 1080TI", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/placa-video.jpg" ,quantidadeEstoque:11},
    { id: 9, descricao: "Processador Ryzen 7 3700x", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/processador.jpg",quantidadeEstoque:18},
    { id: 10, descricao: "Notebook HP i7", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-1.jpg" ,quantidadeEstoque:12},
    { id: 11, descricao: "Notebook Apple H1", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-2.jpg" ,quantidadeEstoque:26},
    { id: 12, descricao: "Mouse Logitech com fio", preco: 20, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-1.png" ,quantidadeEstoque:36},
    { id: 13, descricao: "Mouse Logitech Lightspeed V2", preco: 200, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-2.jpg" ,quantidadeEstoque:4},
    { id: 14, descricao: "Mouse Logitech sem fio", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-4.jpg" ,quantidadeEstoque:52},
    { id: 15, descricao: "Teclado Redragon sem fio", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-2.jpg",quantidadeEstoque:100},
]