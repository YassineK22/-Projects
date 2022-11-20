<?php
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
    $con=mysqli_connect('localhost','root','','chief');
    $req="insert into chief('np','adr',dnjour,dn_mois,dn_anee,'theme','Cour1','Cour2','Cour3','Commentaire','C1','C2','C3','C4')";
    mysqli_query($con,$req);
    
?>