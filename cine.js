        var sala, adultos, ninos, precio, total, dia;
        sala = prompt("¿A qué sala quieres ir?");
        adultos = Number(prompt("¿Cuántos adultos van a asistir?"));
        ninos = Number(prompt("¿Cuántos niños van a asistir?"));
        dia = prompt("¿Qué día de la semana quieres venir?");

        if (adultos > 4) 
        {
            alert("El número máximo de adultos permitidos es 4");
        }
        else 
        {
            if (ninos > 2) //Primero excluyo a los adultos y niños fijando los máximos
            {
                alert("El número máximo de niños permitidos es 2");
            }
            else 
            {
                switch (sala) //Cada sala es un switch
                {
                    case "A": //Calculo el precio, pongo un if por si es el día del espectador e imprimo en pantalla los resultados
                        precio = adultos * 6 + ninos * 3;
                    
                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#531253'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#2D82B7'>Sala seleccionada: A");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>El precio total es " + precio + "€");
                    break;

                    case "B":
                        precio == adultos * 6 + ninos * 3;

                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#8FB8DE'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#9A94BC'>Sala seleccionada: B");
                        document.write("<p align='center'><font face='arial' size='11px' color='#9B5094'>El precio total es " + precio + "€");
                    break;

                    case "C":
                        precio = adultos * 8 + ninos * 4;

                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#531253'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#2D82B7'>Sala seleccionada: C");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>El precio total es " + precio + "€");
                    break;

                    case "D":
                        precio = adultos * 8 + ninos * 4;

                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#531253'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#2D82B7'>Sala seleccionada: D");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>El precio total es " + precio + "€");
                    break;

                    case "E":
                        precio = adultos * 10 + ninos * 6;

                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#531253'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#2D82B7'>Sala seleccionada: C");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>El precio total es " + precio + "€");
                    break;

                    case "F":
                        precio = adultos * 10 + ninos * 6;

                        if(dia == "miércoles")
                        {
                            precio = precio - precio * 0.5;
                            document.write("<p align='center'><font face='arial' size='14px' color='#2D82B7'>Día del espectador: 50% de descuento");
                        }
                        document.write("<p align='center'><font face='arial' size='14px' color='#531253'>Se ha seleccionado:");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>" + adultos + " entradas para adultos");
                        document.write("<p align='center'><font face='arial' size='11px' color='#531253'>" + ninos + " entradas para niños");
                        document.write("<p align='center'><font face='arial' size='11px' color='#2D82B7'>Sala seleccionada: F");
                        document.write("<p align='center'><font face='arial' size='11px' color='#97D8B2'>El precio total es " + precio + "€");
                    break;

                    default:
                        alert("La sala indicada no existe, prueba a escribir una letra de la A a la F");
                    break;
                }
            }
        }
        if(precio > 40) //Si el precio es más de 40, salta una alerta de promoción palomitas
        {
            document.write("<p align='center'><font face='arial' size='14px' color='#58355E'>Promoción activada: ¡Palomitas gratis!<br>");
            document.write("<img src='img/palomitas.jpg' height='100px' align='center'>");
        }
