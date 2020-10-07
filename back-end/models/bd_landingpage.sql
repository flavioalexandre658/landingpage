USE landingpage;

create table files(
    idImagem int not null,
    name varchar(255) not null,
    chave varchar(255) not null,
    size int not null,
    url varchar(255) not null,

    constraint idImagem primary key (idImagem)
);
insert into `landingpage`.`files` values 
(1,
'Imagem Exemplo',
"exemplo",
500,
"https://www.blog.twed.com.br/wp-content/uploads/2018/06/7-Dados-informa%C3%A7%C3%B5es-e-indicadores.png");

create table produto(
    id int not null,
    nome varchar(100) not null,
    video varchar(255) not null,
    headline varchar(255) not null,
    idImagem int not null default 0,
    constraint id primary key (id)


);
insert into `landingpage`.`produto` values 
(1,
'Ring Light',
'https://youtu.be/TIjK_GJjpDc',
'Agora você pode fazer fotos profissionais para suas redes sociais e deixa seu feed maravilhoso com o mais novo Ring Light',
1);

create table informacoes(
    id int not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    animacao varchar(50) not null,
    idImagem int not null default 0,
    constraint id primary key (id)

);
insert into `landingpage`.`informacoes` values 
(1,
'Ajuste as luzes de Led conforme sua necessidade',
'18 maneiras de ajustar a luz, luz branca quente e fria livremente ajustável. Design especial LED SMD, leve e portátil.',
'fadeInRight',
1);

create table motivos(
    id int not null,
    tituloTab varchar(100) not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    icone varchar(350) not null,
    idImagem int not null default 0,
    constraint id primary key (id)
    
);
insert into `landingpage`.`motivos` values 
(1,
'3 Vantagens',
'CHEGOU A HORA DE DAR MAIS LUZ AO SEU AMBIANTE',
'É amplamente aplicado à iluminação de fotos ao ar livre, preenchimento de luz em casa, retrato, moda, arte de casamento, publicidade em fotografia, gravação de vídeo, etc.',
"M12.002 4h-10a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1zm-10-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-10zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
1);

create table pilhas(
    id int not null,
    titulo varchar(100) not null,
    conteudo varchar(255) not null,
    animacao varchar(50) not null,
    idImagem int not null default 0,
    constraint id primary key (id)

);
insert into `landingpage`.`pilhas` values 
(1,
'Ajuste como quiser',
'Diversas maneiras de ajustar a luz.',
'fadeInUpBig',
1);

create table avaliacoes(
    id int not null,
    titulo varchar(100) not null,
    cidade varchar(100) not null,
    idImagem int not null default 0,
    constraint id primary key (id)

);
insert into `landingpage`.`avaliacoes` values 
(1,
'Paula Nunes',
'Salvador - BA',
1);

create table precos(
    id int not null,
    preco int not null,
    parcela int not null,
    unidade int not null,
    idImagem int not null default 0,
    constraint id primary key (id)

);
insert into `landingpage`.`precos` values 
(1,
150.00,
12,
1,
1);

create table rodape(
    id int not null,
    sobrenos varchar(255) not null,
    email varchar(55) not null,
    endereco varchar(200) not null,
    telefone varchar(55) not null,
    idImagem int not null default 0,
    constraint id primary key (id)

);
insert into `landingpage`.`rodape` values 
(1,
"Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja Fale um pouco mais sobre a sua loja.",
"exemplo@exemplo.com",
"Av. Teste, 75, Testano, TETE, TESTOU",
"(11)75589-7444",
1);