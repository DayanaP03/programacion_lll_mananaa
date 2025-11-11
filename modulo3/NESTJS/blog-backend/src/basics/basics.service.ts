import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFirsGet(): object{
        return{
            service:  'Blog-Backend',
            Controller: '/basics',
            function: 'Get Example '

        };
    }


    getConParametros(parametro:string):object{
        return{
            service:'Blog-Backend',
            Controller: '/basics',
            function: 'Get con Parametros',
            parametroRecivido:  parametro

        };
    }


    postFunction(BodyPost: Object):object
        return{
            service:'Blog-Backend',
            Controller: '/basics',
            function: 'Ejemplo de peticion Post ',
            parametroRecivido:  bodyPost

        };
    }
    
    put(BodyPost: object, parametro:string): object{
        return{
            service:'Blog-Backend ' , 
            Controller: '/basics tipo put',
            function: 'Ejemplo de peticion Put',
            bodyRecibido: BodyPost,
            parametro: parametro

        };
    }


}
