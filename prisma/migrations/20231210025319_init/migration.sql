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
    "tipoProceso" "TipoProceso" NOT NULL DEFAULT 'SINGULAR',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "Deudor" (
    "id" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "primerApellido" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "segundoApellido" TEXT,
    "direccion" TEXT,
    "email" TEXT,
    "telCelular" TEXT,
    "telFijo" TEXT,
    "carpetaNumero" INTEGER NOT NULL,

    CONSTRAINT "Deudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Codeudor" (
    "id" INTEGER NOT NULL,
    "cedula" TEXT,
    "direccion" TEXT,
    "nombre" TEXT,
    "telefono" TEXT,
    "carpetaNumero" INTEGER NOT NULL,

    CONSTRAINT "Codeudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pathname" TEXT,
    "carpetaNumero" INTEGER,
    "content" TEXT,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "dueDate" DATE,
    "carpetaNumero" INTEGER,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTarea" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "tareaId" INTEGER,

    CONSTRAINT "SubTarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actuacion" (
    "id" SERIAL NOT NULL,
    "carpetaNumero" INTEGER,
    "isUltimaAct" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idRegActuacion" INTEGER NOT NULL,
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
    "idProceso" INTEGER NOT NULL,

    CONSTRAINT "Actuacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demanda" (
    "id" SERIAL NOT NULL,
    "departamento" TEXT,
    "capitalAdeudado" MONEY,
    "entregaGarantiasAbogado" DATE,
    "tipoProceso" "TipoProceso" NOT NULL DEFAULT 'SINGULAR',
    "mandamientoPago" DATE,
    "etapaProcesal" TEXT,
    "municipio" TEXT,
    "obligacion" TEXT[],
    "radicado" TEXT,
    "vencimientoPagare" DATE[],
    "carpetaNumero" INTEGER NOT NULL,
    "despacho" TEXT,
    "idProceso" INTEGER NOT NULL,
    "idConexion" INTEGER,
    "llaveProceso" TEXT,
    "fechaProceso" DATE,
    "fechaUltimaActuacion" DATE,
    "sujetosProcesales" TEXT,
    "esPrivado" BOOLEAN,
    "cantFilas" INTEGER,
    "fechaPresentacion" DATE[],
    "juzgadoTipo" TEXT,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacion" (
    "id" SERIAL NOT NULL,
    "certimail" BOOLEAN,
    "fisico" BOOLEAN,
    "carpetaNumero" INTEGER NOT NULL,
    "autoNotificado" TEXT,

    CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedidasCautelares" (
    "id" SERIAL NOT NULL,
    "fechaOrdenaMedida" TIMESTAMP(3),
    "medidaSolicitada" TEXT,
    "demandaId" INTEGER NOT NULL,

    CONSTRAINT "MedidasCautelares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifier" (
    "id" SERIAL NOT NULL,
    "fechaRecibido" TIMESTAMP(3),
    "resultado" BOOLEAN,
    "tipo" TEXT NOT NULL,
    "fechaAporta" TIMESTAMP(3),
    "notificacionId" INTEGER,

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
    "id" SERIAL NOT NULL,
    "idProceso" INTEGER NOT NULL,
    "idConexion" INTEGER NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "fechaProceso" DATE,
    "fechaUltimaActuacion" DATE,
    "despacho" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "sujetosProcesales" TEXT NOT NULL,
    "carpetaNumero" INTEGER NOT NULL,
    "esPrivado" BOOLEAN NOT NULL,
    "cantFilas" INTEGER NOT NULL,
    "juzgadoTipo" TEXT,

    CONSTRAINT "Proceso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JuzgadoCarpeta" (
    "carpetaNumero" INTEGER NOT NULL,
    "despachoTipo" TEXT NOT NULL,

    CONSTRAINT "JuzgadoCarpeta_pkey" PRIMARY KEY ("carpetaNumero","despachoTipo")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_carpetaNumero_key" ON "Deudor"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Codeudor_carpetaNumero_key" ON "Codeudor"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "Actuacion_idRegActuacion_key" ON "Actuacion"("idRegActuacion");

-- CreateIndex
CREATE UNIQUE INDEX "Demanda_idProceso_key" ON "Demanda"("idProceso");

-- CreateIndex
CREATE UNIQUE INDEX "Notificacion_carpetaNumero_key" ON "Notificacion"("carpetaNumero");

-- CreateIndex
CREATE UNIQUE INDEX "MedidasCautelares_demandaId_key" ON "MedidasCautelares"("demandaId");

-- CreateIndex
CREATE UNIQUE INDEX "Proceso_idProceso_key" ON "Proceso"("idProceso");

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
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_juzgadoTipo_fkey" FOREIGN KEY ("juzgadoTipo") REFERENCES "Juzgado"("tipo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedidasCautelares" ADD CONSTRAINT "MedidasCautelares_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("idProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifier" ADD CONSTRAINT "Notifier_notificacionId_fkey" FOREIGN KEY ("notificacionId") REFERENCES "Notificacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_juzgadoTipo_fkey" FOREIGN KEY ("juzgadoTipo") REFERENCES "Juzgado"("tipo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuzgadoCarpeta" ADD CONSTRAINT "JuzgadoCarpeta_despachoTipo_fkey" FOREIGN KEY ("despachoTipo") REFERENCES "Juzgado"("tipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuzgadoCarpeta" ADD CONSTRAINT "JuzgadoCarpeta_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
