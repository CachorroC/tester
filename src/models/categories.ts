import { TrulyCruda, CarpetaRaw } from '../types/carpetas';

const carpetasBancolombia = [
  16
  , 90
  , 102
  , 120
  , 174
  , 183
  , 235
  , 278
  , 282
  , 293
  , 310
  , 316
  , 405
  , 409
  , 463
  , 496
  , 499
  , 508
  , 531
  , 532
  , 533
  , 551
  , 552
  , 553
  , 554
  , 555
  , 556
  , 557
  , 558
  , 559
  , 561
  , 562
  , 563
  , 564
  , 565
  , 566
  , 567
  , 568
  , 569
  , 570
  , 571
  , 572
  , 573
  , 574
  , 575
  , 576
  , 577
  , 578
  , 579
  , 580
  , 581
  , 582
  , 583
  , 584
  , 585
  , 586
  , 587
  , 588
  , 589
  , 590
  , 591
  , 592                                                    
  ,
];

const carpetasReintegra = [
  22
  , 25
  , 32
  , 35
  , 42
  , 46
  , 47
  , 58
  , 69
  , 84
  , 86
  , 103
  , 106
  , 108
  , 117
  , 125
  , 164
  , 165
  , 169
  , 179
  , 184
  , 186
  , 191
  , 193
  , 199
  , 204
  , 205
  , 208
  , 209
  , 210
  , 223
  , 233
  , 243
  , 249
  , 254
  , 258
  , 279
  , 280
  , 286
  , 289
  , 292
  , 294
  , 295
  , 297
  , 334
  , 338
  , 344
  , 348
  , 352
  , 358
  , 361
  , 369
  , 387
  , 390
  , 392
  , 396
  , 407
  , 417
  , 420
  , 427
  , 452
  , 458
  , 466
  , 475
  , 477
  , 480
  , 500
  , 502
  , 530
  , 534
  , 537
  , 539
  , 540
  , 541
  , 542
  , 543
  , 546
  , 491                                                    
  ,
];

const carpetasTerminados = [
  1
  , 2
  , 3
  , 4
  , 5
  , 6
  , 7
  , 8
  , 9
  , 10
  , 12
  , 13
  , 14
  , 15
  , 17
  , 18
  , 19
  , 20
  , 21
  , 23
  , 24
  , 26
  , 28
  , 29
  , 30
  , 31
  , 33
  , 34
  , 36
  , 37
  , 38
  , 39
  , 40
  , 41
  , 43
  , 44
  , 45
  , 48
  , 49
  , 50
  , 51
  , 52
  , 53
  , 54
  , 55
  , 56
  , 57
  , 59
  , 60
  , 61
  , 62
  , 63
  , 65
  , 66
  , 67
  , 68
  , 70
  , 71
  , 72
  , 73
  , 74
  , 75
  , 76
  , 77
  , 78
  , 79
  , 80
  , 81
  , 82
  , 83
  , 85
  , 87
  , 88
  , 89
  , 91
  , 92
  , 93
  , 94
  , 95
  , 96
  , 97
  , 98
  , 99
  , 100
  , 101
  , 104
  , 105
  , 107
  , 109
  , 110
  , 111
  , 112
  , 113
  , 114
  , 115
  , 116
  , 118
  , 119
  , 121
  , 122
  , 123
  , 124
  , 126
  , 127
  , 128
  , 129
  , 130
  , 131
  , 132
  , 133
  , 134
  , 135
  , 136
  , 137
  , 138
  , 139
  , 140
  , 141
  , 142
  , 143
  , 144
  , 145
  , 146
  , 147
  , 148
  , 149
  , 150
  , 151
  , 152
  , 153
  , 155
  , 156
  , 157
  , 158
  , 159
  , 160
  , 161
  , 162
  , 163
  , 166
  , 167
  , 168
  , 170
  , 171
  , 172
  , 173
  , 175
  , 176
  , 177
  , 178
  , 180
  , 181
  , 182
  , 185
  , 187
  , 188
  , 189
  , 190
  , 192
  , 194
  , 195
  , 196
  , 197
  , 198
  , 200
  , 202
  , 203
  , 206
  , 207
  , 211
  , 212
  , 213
  , 214
  , 215
  , 216
  , 218
  , 219
  , 220
  , 221
  , 222
  , 224
  , 225
  , 226
  , 227
  , 228
  , 229
  , 230
  , 231
  , 232
  , 234
  , 236
  , 237
  , 238
  , 240
  , 241
  , 242
  , 244
  , 245
  , 246
  , 247
  , 248
  , 250
  , 251
  , 252
  , 253
  , 255
  , 256
  , 257
  , 259
  , 260
  , 261
  , 262
  , 263
  , 264
  , 266
  , 267
  , 268
  , 269
  , 270
  , 271
  , 272
  , 274
  , 275
  , 276
  , 277
  , 281
  , 283
  , 284
  , 285
  , 288
  , 290
  , 291
  , 296
  , 298
  , 299
  , 300
  , 301
  , 302
  , 303
  , 304
  , 305
  , 306
  , 307
  , 308
  , 309
  , 311
  , 312
  , 313
  , 314
  , 315
  , 317
  , 318
  , 319
  , 320
  , 321
  , 322
  , 323
  , 324
  , 325
  , 326
  , 327
  , 329
  , 330
  , 331
  , 332
  , 333
  , 335
  , 336
  , 339
  , 340
  , 341
  , 342
  , 343
  , 345
  , 346
  , 347
  , 349
  , 350
  , 351
  , 353
  , 354
  , 355
  , 356
  , 357
  , 359
  , 360
  , 362
  , 363
  , 364
  , 365
  , 366
  , 367
  , 368
  , 370
  , 372
  , 373
  , 374
  , 375
  , 377
  , 378
  , 379
  , 380
  , 381
  , 382
  , 383
  , 384
  , 385
  , 386
  , 388
  , 389
  , 391
  , 393
  , 394
  , 395
  , 397
  , 398
  , 399
  , 400
  , 401
  , 402
  , 403
  , 404
  , 406
  , 408
  , 410
  , 411
  , 412
  , 413
  , 414
  , 415
  , 416
  , 418
  , 419
  , 421
  , 422
  , 423
  , 424
  , 425
  , 426
  , 428
  , 429
  , 430
  , 431
  , 432
  , 433
  , 434
  , 435
  , 436
  , 437
  , 438
  , 439
  , 440
  , 441
  , 442
  , 443
  , 444
  , 445
  , 446
  , 447
  , 448
  , 449
  , 450
  , 451
  , 453
  , 454
  , 455
  , 456
  , 457
  , 459
  , 460
  , 461
  , 462
  , 464
  , 465
  , 467
  , 468
  , 469
  , 470
  , 471
  , 472
  , 473
  , 474
  , 476
  , 478
  , 479
  , 481
  , 482
  , 483
  , 484
  , 485
  , 486
  , 487
  , 488
  , 489
  , 490
  , 492
  , 493
  , 494
  , 495
  , 497
  , 498
  , 501
  , 503
  , 504
  , 505
  , 506
  , 507
  , 509
  , 510
  , 511
  , 512
  , 513
  , 514
  , 516
  , 517
  , 518
  , 519
  , 520
  , 521
  , 522
  , 523
  , 524
  , 525
  , 526
  , 527
  , 528
  , 529
  , 535
  , 536
  , 538
  , 544
  , 545
  , 547
  , 548
  , 549
  , 550
  , 560
  , 154
  , 239                                                    
  ,
];

const carpetasInsolvencia = [
  27
  , 64
  , 201
  , 265
  , 273
  , 287
  , 337
  , 514
];

const carpetasLiosJuridicos = [
  11
  , 217
  , 328
  , 371
  , 376
];

export function categoryAssignment(
  carpeta: TrulyCruda 
): CarpetaRaw {
  const {
    numero 
  } = carpeta;

  const numeroInBancolombia = carpetasBancolombia.includes(
    numero 
  );

  const numeroInReintegra = carpetasReintegra.includes(
    numero 
  );

  const numeroInTerminados = carpetasTerminados.includes(
    numero 
  );

  const numeroInInsolvencia = carpetasInsolvencia.includes(
    numero 
  );

  const numeroInLiosJuridicos = carpetasLiosJuridicos.includes(
    numero 
  );

  if ( numeroInBancolombia ) {
    return {
      ...carpeta
      , category: 'Bancolombia',
    };
  } else if ( numeroInReintegra ) {
    return {
      ...carpeta
      , category: 'Reintegra',
    };
  } else if ( numeroInLiosJuridicos ) {
    return {
      ...carpeta
      , category: 'LiosJuridicos',
    };
  } else if ( numeroInInsolvencia ) {
    return {
      ...carpeta
      , category: 'Insolvencia',
    };
  } else if ( numeroInTerminados ) {
    return {
      ...carpeta
      , category: 'Terminados',
    };
  }

  return {
    ...carpeta
    , category: 'Bancolombia',
  };
}
