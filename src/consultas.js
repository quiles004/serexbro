db.jugadores.find({tiros_de_campo:{$lte:"48"}});
/*jugadores que tengan un porcentaje de tiros de campo por debajo del 48%*/
db.jugadores.find({nacionalidad:{$regex: /E/}});
/*jugadores cuya nacionalidad empiece por la letra E*/
db.jugadores.find({$and:[{tiros_libres:{$lt:"76"}},{altura:{$gte:"200"}}]});
/*jugadores con altura igual o mayor a 200 cms y que su porventaje de tiros libres sea menor de 76*/
db.jugadores.find({$and:[{posicion:{$ne:"base"}}]});
/*jugadores que su posicion en el campo de sea base*/
db.jugadores.find({$and:[{nacionalidad:{$not:{$regex:/E/}},$nor:[{altura:{$lte:"202"}}]}]});
/*jugadores que su nacionalidad no empiece por E y que no tengan una altura menor o igual de 202 cms*/