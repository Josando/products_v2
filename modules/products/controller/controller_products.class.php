<?php

include 'modules/products/utils/functions_products.inc.php';

if ($_POST) {



    $result = validate_products();
    
   
    if ($result['resultado']) {
        $arrArgument = array(
            'name' => ucfirst($result['datos']['name']),
            'last_name' => ($result['datos']['code']),
            'origin' => $result['datos']['origin'],
            'provider' => $result['datos']['provider'],
            'email' => $result['datos']['email'],
            'price' => $result['datos']['price'],
            'description' => ucfirst($result['datos']['description']),
            'material' => $result['datos']['material'],
            'type' => ($result['datos']['type']), //strtoupper > para convertir string a mayusculas
            'shape' => ($result['datos']['shape']),
            'brand' => ($result['datos']['brand']),
            'stock' => $result['datos']['stock'],
            'date_reception' => $result['datos']['date_reception'],
            'departure_date' => $result['datos']['departure_date'],
            
        );

        $mensaje = "User has been successfully registered";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['products'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;

        $callback = "index.php?module=products&view=results_products";
        redirect($callback);
    } else {
        
        $error = $result['error'];
    }
    
}
include 'modules/products/view/create_products.php';

