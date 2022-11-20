<?php
    $Cour1 = '0';
    $Cour2 = '0';   
    $Cour3 = '0';
    $C1 = '0';
    $C2 = '0';
    $C3 = '0';
    $C4 =0;
    $np = $_POST['nompre'];
    $adr = $_POST['Adresse'];
    $dnjour = $_POST['jour'];
    $dn_mois = $_POST['mois'];
    $dn_anee = $_POST['annee'];
    $theme = $_POST['Theme'];
    $Cour1 = $_POST['Cour1'];
    $Cour2 = $_POST['Cour2'];
    $Cour3 = $_POST['Cour3'];
    $Comment = $_POST['S2'];
    $C1 = $_POST['C1'];
    $C2 = $_POST['C2'];
    $C3 = $_POST['C3'];
    $C4 = $_POST['C4'];
    
    //Database connection
    mysql_connect('http://127.0.0.1:8080/DataBase%20chief/data.php','root','');
    mysql_select_db('chief');
    $req="insert into chief(np,adr,dnjour,dn_mois,dn_anee,theme,Cour1,Cour2,Cour3,Commentaire,C1,C2,C3,C";
    mysql_query($req);
    if(mysql_affected_rows()>0)
        echo 'inscription successfully';
    else
        echo 'inscription failed';
?>