-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Terminados', 'LiosJuridicos', 'Bancolombia', 'Reintegra', 'Insolvencia');

-- CreateEnum
CREATE TYPE "Departamento" AS ENUM ('BOGOTA', 'CUNDINAMARCA', 'META', 'ANTIOQUIA', 'ATLANTICO');

-- CreateEnum
CREATE TYPE "TipoProceso" AS ENUM ('HIPOTECARIO', 'PRENDARIO', 'SINGULAR', 'ACUMULADO');

-- CreateTable
CREATE TABLE "Carpeta" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "llaveProceso" TEXT,
    "nombre" TEXT NOT NULL,
    "category" TEXT DEFAULT 'Bancolombia',
    "deudor" JSONB NOT NULL,
    "demanda" JSONB NOT NULL,
    "idProcesos" INTEGER[],
    "departamento" "Departamento",
    "capitalAdeudado" MONEY DEFAULT 1000000,
    "entregaGarantiasAbogado" DATE DEFAULT CURRENT_TIMESTAMP,
    "tipoProceso" TEXT DEFAULT 'SINGULAR',
    "etapaProcesal" TEXT DEFAULT 'Reparto',
    "fechaPresentacion" DATE,
    "mandamientoPago" DATE,
    "municipio" TEXT,
    "obligaciones" TEXT[],
    "radicado" TEXT,
    "vencimientoPagare" DATE[],

    CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "text" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pathname" TEXT,
    "carpetaNumero" INTEGER,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "creationDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATE,
    "carpetaId" INTEGER,
    "text" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTarea" (
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "isComplete" BOOLEAN NOT NULL,
    "tareaId" INTEGER,

    CONSTRAINT "SubTarea_pkey" PRIMARY KEY ("text")
);

-- CreateTable
CREATE TABLE "Actuacion" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idRegActuacion" OID NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "consActuacion" INTEGER NOT NULL,
    "fechaActuacion" DATE NOT NULL,
    "actuacion" TEXT NOT NULL,
    "anotacion" TEXT,
    "fechaInicial" DATE,
    "fechaRegistro" DATE NOT NULL,
    "fechaFinal" DATE,
    "codRegla" TEXT NOT NULL,
    "conDocumentos" BOOLEAN NOT NULL,
    "cant" INTEGER NOT NULL,
    "carpetaId" INTEGER,
    "procesoIdProceso" INTEGER,

    CONSTRAINT "Actuacion_pkey" PRIMARY KEY ("idRegActuacion")
);

-- CreateTable
CREATE TABLE "Demanda" (
    "id" SERIAL NOT NULL,
    "departamento" "Departamento" NOT NULL,
    "capitalAdeudado" MONEY,
    "entregaGarantiasAbogado" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipoProceso" "TipoProceso" NOT NULL DEFAULT 'SINGULAR',
    "etapaProcesal" TEXT,
    "fechaPresentacion" DATE,
    "mandamientoPago" DATE,
    "municipio" TEXT,
    "obligacion" TEXT[],
    "radicado" TEXT,
    "vencimientoPagare" DATE[],
    "expediente" TEXT,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juzgado" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "carpetaId" INTEGER,

    CONSTRAINT "Juzgado_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Proceso" (
    "idProceso" INTEGER NOT NULL,
    "idConexion" INTEGER NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "fechaProceso" TIMESTAMP(3),
    "fechaUltimaActuacion" TIMESTAMP(3),
    "despacho" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "sujetosProcesales" TEXT NOT NULL,
    "esPrivado" BOOLEAN NOT NULL,
    "cantFilas" INTEGER NOT NULL,
    "carpetaId" INTEGER,

    CONSTRAINT "Proceso_pkey" PRIMARY KEY ("llaveProceso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_numero_key" ON "Carpeta"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_llaveProceso_key" ON "Carpeta"("llaveProceso");

-- CreateIndex
CREATE UNIQUE INDEX "Nota_id_key" ON "Nota"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tarea_id_key" ON "Tarea"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Proceso_idProceso_key" ON "Proceso"("idProceso");

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_carpetaId_fkey" FOREIGN KEY ("carpetaId") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTarea" ADD CONSTRAINT "SubTarea_tareaId_fkey" FOREIGN KEY ("tareaId") REFERENCES "Tarea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_carpetaId_fkey" FOREIGN KEY ("carpetaId") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_procesoIdProceso_fkey" FOREIGN KEY ("procesoIdProceso") REFERENCES "Proceso"("idProceso") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juzgado" ADD CONSTRAINT "Juzgado_carpetaId_fkey" FOREIGN KEY ("carpetaId") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_carpetaId_fkey" FOREIGN KEY ("carpetaId") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
