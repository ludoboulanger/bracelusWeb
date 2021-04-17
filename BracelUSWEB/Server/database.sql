-- Database name : BracelusDB

CREATE TABLE ModeSommeil
(
  ID_ModeSom SERIAL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_ModeSom)
);

CREATE TABLE EtatSommeil
(
  ID_EtatSom SERIAL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_EtatSom)
);

CREATE TABLE ActivitePhysique
(
  ID_ActPhys SERIAL,
  Nom VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID_ActPhys)
);

CREATE TABLE Utilisateur
(
  ID_Utilisateur SERIAL,
  Prenom VARCHAR(100) NOT NULL,
  Nom VARCHAR(100) NOT NULL,
  ID_ModeSom INT NOT NULL,
  PRIMARY KEY (ID_Utilisateur),
  FOREIGN KEY (ID_ModeSom) REFERENCES ModeSommeil(ID_ModeSom)
);

CREATE TABLE LogCaloriesBrulees
(
  ID_LogCalBrul SERIAL,
  Date VARCHAR(100) NOT NULL,
  Nombre INT NOT NULL,
  ID_Utilisateur INT NOT NULL,
  PRIMARY KEY (ID_LogCalBrul),
  FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);

CREATE TABLE LogNiveauOxygene
(
  ID_LogNivOxy SERIAL,
  Date VARCHAR(100) NOT NULL,
  Nombre INT NOT NULL,
  ID_Utilisateur INT NOT NULL,
  PRIMARY KEY (ID_LogNivOxy),
  FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);

CREATE TABLE LogNiveauCardiaque
(
  ID_LogNivCard SERIAL,
  Date VARCHAR(100) NOT NULL,
  Nombre INT NOT NULL,
  ID_Utilisateur INT NOT NULL,
  PRIMARY KEY (ID_LogNivCard),
  FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);

CREATE TABLE LogActivitePhysique
(
  ID_LogActPhys SERIAL,
  Date VARCHAR(100) NOT NULL,
  ID_ActPhys INT NOT NULL,
  ID_Utilisateur INT NOT NULL,
  PRIMARY KEY (ID_LogActPhys),
  FOREIGN KEY (ID_ActPhys) REFERENCES ActivitePhysique(ID_ActPhys),
  FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);

CREATE TABLE LogEtatSommeil
(
  ID_LogEtatSom SERIAL,
  Date VARCHAR(100) NOT NULL,
  ID_EtatSom INT NOT NULL,
  ID_Utilisateur INT NOT NULL,
  PRIMARY KEY (ID_LogEtatSom),
  FOREIGN KEY (ID_EtatSom) REFERENCES EtatSommeil(ID_EtatSom),
  FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);

INSERT INTO ModeSommeil VALUES (DEFAULT,'Aucun');
INSERT INTO ModeSommeil VALUES (DEFAULT,'Jour');
INSERT INTO ModeSommeil VALUES (DEFAULT,'Nuit');

INSERT INTO EtatSommeil VALUES (DEFAULT,'Aucun');
INSERT INTO EtatSommeil VALUES (DEFAULT,'Endormissement');
INSERT INTO EtatSommeil VALUES (DEFAULT,'Sommeil léger');
INSERT INTO EtatSommeil VALUES (DEFAULT,'Sommeil profond');
INSERT INTO EtatSommeil VALUES (DEFAULT,'Sommeil paradoxal');

INSERT INTO ActivitePhysique VALUES (DEFAULT,'Sédentaire');
INSERT INTO ActivitePhysique VALUES (DEFAULT,'Modéré');
INSERT INTO ActivitePhysique VALUES (DEFAULT,'Élevée');

INSERT INTO Utilisateur VALUES (DEFAULT,'Tony', 'Stark', 1);