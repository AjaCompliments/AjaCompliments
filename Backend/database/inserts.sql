INSERT INTO compliments (complimentname, category, counterFlags, picture,prise,tempsprise) VALUES 
('the vert bio', 'metabolisme', 'safe', 'https://green-ethnies.ch/cdn/shop/products/The_Vert_BIO_antioxydant_revitalisant_complement_alimentaire_d5bd6c79-757d-4303-9e78-baa6bc804e0d_530x@2x.jpg?v=1615292670','1010101',"08:00 AM"),
('multivitamins', 'vitamins', 'safe', 'https://www.parapharm.tn/products/70798-vitarmonyl-multivitamines-12-vitamines-7-oligo-elements.webp','1111111',"08:00 AM"),
('mare mag', 'magnesium', 'safe', 'https://www.parashop.tn/image/cache/catalog/produits/biohealth/maremag-60-gelules-1100x1100.jpg.webp','1111111',"08:00 AM"),
('tabastop', 'fumer', 'safe', 'https://tunisiepara.com/wp-content/uploads/2022/05/TABASTOP-30-GELLULES.jpg','1111111',"08:00 AM"),
('lunettes protection lumiere bleue sans presc', 'screentime', 'safe', 'https://oftal.fr/2063-large_default/lunette-de-protection-contre-la-lumiere-bleue-modele-adulte.jpg','1111111',"08:00 AM"),
('melatonin', 'sommeil', 'safe', 'https://pharma-shop.tn/3735-large_default/vital-melatonuit-30-gelules.jpg','1111111',"08:00 AM");





INSERT INTO users (iduser, username, useremail, userpass, validationCode, activationStatus) 
VALUES (5, 'maysa', 'lahiani.mayssa@gmail.com', '$2b$10$wlh5Il7Dut/5Q./lT3SmDOVi97RzcoNIer2PpxPp1UiXeY1Ow/XlW', 'lLZrT8m', 1);




INSERT INTO `compliment`.`users` 
(username, useremail, userpass, validationCode, activationStatus, weight, height, gender, goal, metabolism, vitamins, magnesium, screentime, smoking, sleephrs, allergies, diet, healthcomplications, pastprescriptions, newrescriptions,age) 
VALUES 
('mayssa', 'lahiani.mayssa@gmail.com', '$2b$10$wlh5Il7Dut/5Q./lT3SmDOVi97RzcoNIer2PpxPp1UiXeY1Ow/XlW', 'lLZrT8m', 1, NULL, NULL, NULL, 'no goal', NULL, NULL, NULL, 'false', 'false', NULL, '[]', '[]', '[]', 'false', '[]','28');


