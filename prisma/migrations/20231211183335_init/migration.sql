-- CreateEnum
CREATE TYPE "NotifierName" AS ENUM ('DOS91', 'DOS92');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Terminados', 'LiosJuridicos', 'Bancolombia', 'Reintegra', 'Insolvencia', 'SinEspecificar', 'todos');

-- CreateEnum
CREATE TYPE "Departamento" AS ENUM ('BOGOTA', 'CUNDINAMARCA', 'META', 'ANTIOQUIA', 'ATLANTICO');

-- CreateEnum
CREATE TYPE "TipoProceso" AS ENUM ('HIPOTECARIO', 'PRENDARIO', 'SINGULAR', 'ACUMULADO');

-- CreateTable
CREATE TABLE "Carpeta" (
    "category" "Category" NOT NULL DEFAULT 'SinEspecificar',
    "fecha" TIMESTAMP(3),
    "idProcesos" INTEGER[],
    "idRegUltimaAct" INTEGER,
    "llaveProceso" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "revisado" BOOLEAN NOT NULL DEFAULT false,
    "terminado" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "Deudor" (
    "carpetaNumero" INTEGER NOT NULL,
    "cedula" TEXT NOT NULL,
    "direccion" TEXT,
    "email" TEXT,
    "id" SERIAL NOT NULL,
    "primerApellido" TEXT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "segundoNombre" TEXT,
    "telCelular" TEXT,
    "telFijo" TEXT,

    CONSTRAINT "Deudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Codeudor" (
    "carpetaNumero" INTEGER NOT NULL,
    "cedula" TEXT,
    "direccion" TEXT,
    "id" INTEGER NOT NULL,
    "nombre" TEXT,
    "telefono" TEXT,

    CONSTRAINT "Codeudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "carpetaNumero" INTEGER,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3) NOT NULL,
    "id" SERIAL NOT NULL,
    "pathname" TEXT,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "carpetaNumero" INTEGER,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATE,
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTarea" (
    "date" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "tareaId" INTEGER,
    "text" TEXT NOT NULL,

    CONSTRAINT "SubTarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actuacion" (
    "actuacion" TEXT NOT NULL,
    "anotacion" TEXT,
    "cant" INTEGER NOT NULL,
    "carpetaNumero" INTEGER,
    "codRegla" TEXT NOT NULL,
    "conDocumentos" BOOLEAN NOT NULL,
    "consActuacion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActuacion" DATE NOT NULL,
    "fechaFinal" DATE,
    "fechaInicial" DATE,
    "fechaRegistro" DATE NOT NULL,
    "idProceso" INTEGER NOT NULL,
    "idRegActuacion" INTEGER NOT NULL,
    "isUltimaAct" BOOLEAN NOT NULL,
    "llaveProceso" TEXT NOT NULL,

    CONSTRAINT "Actuacion_pkey" PRIMARY KEY ("idRegActuacion")
);

-- CreateTable
CREATE TABLE "Demanda" (
    "capitalAdeudado" MONEY,
    "carpetaNumero" INTEGER NOT NULL,
    "departamento" TEXT,
    "despacho" TEXT,
    "entregaGarantiasAbogado" DATE,
    "etapaProcesal" TEXT,
    "expediente" TEXT,
    "fechaPresentacion" DATE[],
    "id" SERIAL NOT NULL,
    "mandamientoPago" DATE,
    "medidasCautelaresId" INTEGER,
    "municipio" TEXT,
    "obligacion" TEXT[],
    "radicado" TEXT,
    "tipoProceso" "TipoProceso" NOT NULL DEFAULT 'SINGULAR',
    "vencimientoPagare" DATE[],

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacion" (
    "autoNotificado" TEXT,
    "carpetaNumero" INTEGER NOT NULL,
    "certimail" BOOLEAN,
    "fisico" BOOLEAN,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedidasCautelares" (
    "fechaOrdenaMedida" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "medidaSolicitada" TEXT,

    CONSTRAINT "MedidasCautelares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifier" (
    "fechaAporta" TIMESTAMP(3),
    "fechaRecibido" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "notificacionId" INTEGER,
    "resultado" BOOLEAN,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Notifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Juzgado" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Juzgado_pkey" PRIMARY KEY ("tipo")
);

-- CreateTable
CREATE TABLE "Proceso" (
    "cantFilas" INTEGER NOT NULL,
    "carpetaNumero" INTEGER NOT NULL,
    "departamento" TEXT NOT NULL,
    "despacho" TEXT NOT NULL,
    "esPrivado" BOOLEAN NOT NULL,
    "fechaProceso" DATE,
    "fechaUltimaActuacion" DATE,
    "idConexion" INTEGER NOT NULL,
    "idProceso" INTEGER NOT NULL,
    "juzgadoTipo" TEXT NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "sujetosProcesales" TEXT NOT NULL,

    CONSTRAINT "Proceso_pkey" PRIMARY KEY ("idProceso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_carpetaNumero_key" ON "Deudor"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Codeudor_carpetaNumero_key" ON "Codeudor"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Demanda_carpetaNumero_key" ON "Demanda"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Notificacion_carpetaNumero_key" ON "Notificacion"("carpetaNumero");

-- AddForeignKey
ALTER TABLE "Carpeta" ADD CONSTRAINT "Carpeta_idRegUltimaAct_fkey" FOREIGN KEY ("idRegUltimaAct") REFERENCES "Actuacion"("idRegActuacion") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deudor" ADD CONSTRAINT "Deudor_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Codeudor" ADD CONSTRAINT "Codeudor_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTarea" ADD CONSTRAINT "SubTarea_tareaId_fkey" FOREIGN KEY ("tareaId") REFERENCES "Tarea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_idProceso_fkey" FOREIGN KEY ("idProceso") REFERENCES "Proceso"("idProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_medidasCautelaresId_fkey" FOREIGN KEY ("medidasCautelaresId") REFERENCES "MedidasCautelares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifier" ADD CONSTRAINT "Notifier_notificacionId_fkey" FOREIGN KEY ("notificacionId") REFERENCES "Notificacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_juzgadoTipo_fkey" FOREIGN KEY ("juzgadoTipo") REFERENCES "Juzgado"("tipo") ON DELETE RESTRICT ON UPDATE CASCADE;
