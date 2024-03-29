CREATE TABLE Usuario (
  Id bigserial PRIMARY KEY,
  Nome varchar,
  Email varchar,
  DataNascimento date,
  Senha varchar(255),
  Ativo bool default true,
  CriadoEm timestamp default now(),
  CriadoPor integer,
  AlteradoEm timestamp,
  AlteradoPor integer,
  DeletadoEm timestamp,
  DeletadoPor integer
);

CREATE TABLE Servico (
  Id bigserial PRIMARY KEY,
  Nome varchar,
  Caminho varchar,
  Metodo varchar,
  Ativo bool default true,
  CriadoEm timestamp default now(),
  CriadoPor integer,
  AlteradoEm timestamp,
  AlteradoPor integer,
  DeletadoEm timestamp,
  DeletadoPor integer
);

CREATE TABLE PermissoesServicosUsuario (
  Id bigserial PRIMARY KEY,
  IdUsuario integer,
  IdServico integer,
  PodeConsultar bool,
  PodeInserir bool,
  PodeAlterar bool,
  PodeDeletar bool,
  Ativo bool default true,
  CriadoEm timestamp default now(),
  CriadoPor integer,
  AlteradoEm timestamp,
  AlteradoPor integer,
  DeletadoEm timestamp,
  DeletadoPor integer
);

CREATE TABLE SessaoUsuario (
  Id bigserial PRIMARY KEY,
  IdUsuario integer,
  TokenAcesso text,
  TokenRecuperacao text,
  Desativado bool default false,
  ExpiraEm timestamp,
  CriadoEm timestamp default now()
);

ALTER TABLE PermissoesServicosUsuario ADD FOREIGN KEY (IdUsuario) REFERENCES Usuario (Id);

ALTER TABLE PermissoesServicosUsuario ADD FOREIGN KEY (IdServico) REFERENCES Servico (Id);

ALTER TABLE SessaoUsuario ADD FOREIGN KEY (IdUsuario) REFERENCES Usuario (Id);