CREATE DATABASE BracelusBD;

CREATE TABLE ModeSommeil
(
  ID_ModeSom INT NOT NULL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_ModeSom)
);

CREATE TABLE EtatSommeil
(
  ID_EtatSom INT NOT NULL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_EtatSom)
);

CREATE TABLE ActivitePhysique
(
  ID_ActPhys INT NOT NULL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_ActPhys)
);

CREATE TABLE Utilisateur
(
  ID INT NOT NULL,
  Prenom VARCHAR(100) NOT NULL,
  Nom VARCHAR(100) NOT NULL,
  ID_ModeSom INT NOT NULL,
  ID_EtatSom INT NOT NULL,
  ID_ActPhys INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (ID_ModeSom) REFERENCES ModeSommeil(ID_ModeSom),
  FOREIGN KEY (ID_EtatSom) REFERENCES EtatSommeil(ID_EtatSom),
  FOREIGN KEY (ID_ActPhys) REFERENCES ActivitePhysique(ID_ActPhys)
);

CREATE TABLE CaloriesBrulees
(
  ID_CalBrul INT NOT NULL,
  Nombre INT NOT NULL,
  Date DATE NOT NULL,
  ID INT NOT NULL,
  PRIMARY KEY (ID_CalBrul),
  FOREIGN KEY (ID) REFERENCES Utilisateur(ID)
);

CREATE TABLE NiveauOxygene
(
  ID_NivOxy INT NOT NULL,
  Date DATE NOT NULL,
  Nombre INT NOT NULL,
  ID INT NOT NULL,
  PRIMARY KEY (ID_NivOxy),
  FOREIGN KEY (ID) REFERENCES Utilisateur(ID)
);

CREATE TABLE NiveauCardiaque
(
  ID_NivCard INT NOT NULL,
  Nombre INT NOT NULL,
  Date DATE NOT NULL,
  ID INT NOT NULL,
  PRIMARY KEY (ID_NivCard),
  FOREIGN KEY (ID) REFERENCES Utilisateur(ID)
);

INSERT INTO ModeSommeil VALUES (0, 'Aucun');
INSERT INTO ModeSommeil VALUES (1, 'Jour');
INSERT INTO ModeSommeil VALUES (2, 'Nuit');

INSERT INTO EtatSommeil VALUES (0, 'Aucun');
INSERT INTO EtatSommeil VALUES (1, 'Endormissement');
INSERT INTO EtatSommeil VALUES (2, 'Sommeil léger');
INSERT INTO EtatSommeil VALUES (3, 'Sommeil profond');
INSERT INTO EtatSommeil VALUES (4, 'Sommeil paradoxal');

INSERT INTO ActivitePhysique VALUES (0, 'Aucun');
INSERT INTO ActivitePhysique VALUES (1, 'Faible');
INSERT INTO ActivitePhysique VALUES (2, 'Modéré');
INSERT INTO ActivitePhysique VALUES (3, 'Élevée');
INSERT INTO ActivitePhysique VALUES (4, 'Très élevée');

INSERT INTO Utilisateur VALUES (0, Tony, Stark, 0, 0, 0);