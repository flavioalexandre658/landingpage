USE landingpage;

create table files(
    idImagem varchar(100) not null,
    name varchar(255) not null,
    chave varchar(255) not null,
    size int not null,
    url varchar(255) not null,

    constraint idImagem primary key (idImagem)
);


create table produto(
    id int not null,
    nome varchar(100) not null,
    video varchar(255) not null,
    headline varchar(255) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)


);
insert into `landingpage`.`produto` values 
(1,
'Ring Light',
'https://youtu.be/TIjK_GJjpDc',
'Agora você pode fazer fotos profissionais para suas redes sociais e deixa seu feed maravilhoso com o mais novo Ring Light',
'');

create table informacoes(
    id int not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    animacao varchar(50) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)

);


create table motivos(
    id int not null,
    tituloTab varchar(100) not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    icone varchar(350) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)
    
);


create table pilhas(
    id int not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    animacao varchar(50) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)

);


create table avaliacoes(
    id int not null,
    titulo varchar(100) not null,
    cidade varchar(100) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)

);


create table precos(
    id int not null,
    preco int not null,
    parcela int not null,
    unidade int not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)

);


create table rodape(
    id int not null,
    sobrenos varchar(255) not null,
    email varchar(55) not null,
    endereco varchar(200) not null,
    telefone varchar(55) not null,
    idImagem varchar(100) not null,
    constraint id primary key (id)

);
insert into `landingpage`.`rodape` values 
(1,
"Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja.",
"exemplo@exemplo.com",
"Av. Teste, 75, Testano, TETE, TESTOU",
"(11)75589-7444",
1);