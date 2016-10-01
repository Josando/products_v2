//Crear un plugin

jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        if ($("#name").attr("value") == "") {
            $("#name").attr("value", "Enter name");
            $("#name").focus(function () {
                if ($("#name").attr("value") == "Enter name") {
                    $("#name").attr("value", "");
                }
            });
        }
        $("#name").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#name").attr("value") == "") {
                $("#name").attr("value", "Enter name");
            }
        });

        if ($("#code").attr("value") == "") {
            $("#code").attr("value", "Enter code");
            $("#code").focus(function () {
                if ($("#code").attr("value") == "Enter code") {
                    $("#code").attr("value", "");
                }
            });
        }
        $("#code").blur(function () {
            if ($("#code").attr("value") == "") {
                $("#code").attr("value", "Enter code");
            }
        });
        if ($("#origin").attr("value") == "") {
            $("#origin").attr("value", "Enter origin");
            $("#origin").focus(function () {
                if ($("#origin").attr("value") == "Enter origin") {
                    $("#origin").attr("value", "");
                }
            });
        }
        $("#origin").blur(function () {
            if ($("#origin").attr("value") == "") {
                $("#origin").attr("value", "Enter origin");
            }
        });
        if ($("#provider").attr("value") == "") {
            $("#provider").attr("value", "Enter provider");
            $("#provider").focus(function () {
                if ($("#provider").attr("value") == "Enter provider") {
                    $("#provider").attr("value", "");
                }
            });
        }
        $("#provider").blur(function () {
            if ($("#provider").attr("value") == "") {
                $("#provider").attr("value", "Enter provider");
            }
        });
        if ($("#email").attr("value") == "") {
            $("#email").attr("value", "Enter email");
            $("#email").focus(function () {
                if ($("#email").attr("value") == "Enter email") {
                    $("#email").attr("value", "");
                }
            });
        }
        $("#email").blur(function () {
            if ($("#email").attr("value") == "") {
                $("#email").attr("value", "Enter email");
            }
        });
        if ($("#price").attr("value") == "") {
            $("#price").attr("value", "Enter price");
            $("#price").focus(function () {
                if ($("#price").attr("value") == "Enter price") {
                    $("#price").attr("value", "");
                }
            });
        }
        $("#price").blur(function () {
            if ($("#price").attr("value") == "") {
                $("#price").attr("value", "Enter price");
            }
        });
        if ($("#description").val() == "") {
            $("#description").val("Enter description");
            $("#description").focus(function () {
                if ($("#description").val() == "Enter description") {
                    $("#description").val("");
                }
            });
        }
        $("#description").blur(function () {
            if ($("#description").val() == "") {
                $("#description").val("Enter description");
            }
        });
        if ($("#date_reception").attr("value") == "") {
            $("#date_reception").attr("value", "Enter date reception");
            $("#date_reception").focus(function () {
                if ($("#date_reception").attr("value") == "Enter date reception") {
                    $("#date_reception").attr("value", "");
                }
            });
        }
        $("#date_reception").blur(function () {
            if ($("#date_reception").attr("value") == "") {
                $("#date_reception").attr("value", "Enter date reception");
            }
        });
        if ($("#departure_date").attr("value") == "") {
            $("#departure_date").attr("value", "Enter depurate date");
            $("#departure_date").focus(function () {
                if ($("#departure_date").attr("value") == "Enter depurate date") {
                    $("#departure_date").attr("value", "");
                }
            });
        }
        $("#departure_date").blur(function () {
            if ($("#departure_date").attr("value") == "") {
                $("#departure_date").attr("value", "Enter depurate date");
            }
        });
        

    });//each
    return this;

};//function

$(document).ready(function () {
    
    

    $(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará

    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var code_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{2,30}$/;
    var description_reg = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;
    var origin_reg = /^[0-9a-zA-Z]{2,20}$/;
    var provider_reg = /^[0-9a-zA-Z]{2,20}$/;
    var price_reg = /^[0-9]{2,10}$/;
    

    $("#submit_product").click(function () {
        $(".error").remove();
        if ($("#name").val() == "" || $("#name").val() == "Enter name") {
            $("#name").focus().after("<span class='error'> Enter name</span>");
            return false;
        } else if (!string_reg.test($("#name").val())) {
            $("#name").focus().after("<span class='error'>Name must be 2 to 30 letters</span>");
            return false;
        }

        else if ($("#code").val() == "" || $("#code").val() == "Enter code") {
            $("#code").focus().after("<span class='error'>Enter code</span>");
            return false;
        } else if (!code_reg.test($("#code").val())) {
            $("#code").focus().after("<span class='error'>Code must be 6 to 30 letters</span>");
            return false;
        }

        else if ($("#origin").val() == "" || $("#origin").val() == "") {
            $("#origin").focus().after("<span class='error'>Enter origin</span>");
            return false;
        } else if (!origin_reg.test($("#origin").val())) {
            $("#origin").focus().after("<span class='error'>Origin must be 2 to 30 letters</span>");
            return false;
        }

        else if ($("#provider").val() == "" || $("#provider").val() == "Enter provider") {
            $("#provider").focus().after("<span class='error'>Code must be 6 to 30 letters</span>");
            return false;
        } else if (!provider_reg.test($("#provider").val())) {
            $("#provider").focus().after("<span class='error'>Enter provider</span>");
            return false;
        }

        if ($("#email").val() == "" || $("#email").val() == "Enter email") {
            $("#email").focus().after("<span class='error'>Enter email</span>");
            return false;
        } else if (!email_reg.test($("#email").val())) {
            $("#email").focus().after("<span class='error'>Email is not correct.</span>");
            return false;
        }

        if ($("#price").val() == "" || $("#price").val() == "Enter price") {
            $("#price").focus().after("<span class='error'>Enter price</span>");
            return false;
        } else if (!price_reg.test($("#price").val())) {
            $("#price").focus().after("<span class='error'>price must be 2 to 10 numbers</span>");
            return false;
        }

        if ($("#description").val() == "" || $("#description").val() == "Enter description") {
            $("#description").focus().after("<span class='error'>Enter description</span>");
            return false;
        } else if (!description_reg.test($("#description").val())) {
            $("#description").focus().after("<span class='error'>Description must be 2 to 30 characters.</span>");
            return false;
        }

        if ($("#date_reception").val() == "" || $("#date_reception").val() == "Enter date reception") {
            $("#date_reception").focus().after("<span class='error'>Enter date reception</span>");
            return false;
        } else if (!date_reg.test($("#date_reception").val())) {
            $("#date_reception").focus().after("<span class='error'>The date is not correct</span>");
            return false;
        }

        if ($("#departure_date").val() == "" || $("#departure_date").val() == "Enter departure date") {
            $("#departure_date").focus().after("<span class='error'>Enter departure date</span>");
            return false;
        } else if (!date_reg.test($("#departure_date").val())) {
            $("#departure_date").focus().after("<span class='error'>The date is not correct.</span>");
            return false;
        }


        $("#form_products").submit();
        $("#form_products").attr("action", "index.php?module=products");

    });

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#name").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#code").keyup(function () {
        if ($(this).val() != "" && code_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#origin").keyup(function () {
        if ($(this).val() != "" && origin_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#provider").keyup(function () {
        if ($(this).val() != "" &&  provider_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#email").keyup(function () {
        if ($(this).val() != "" && email_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#price").keyup(function () {
        if ($(this).val() != "" && price_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#description").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#date_reception").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#departure_date").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });



});
