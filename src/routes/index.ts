import express, { Router, Request, Response, NextFunction } from 'express';

const routes = Router();

routes
    .get('/', (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ message: "Servico em Operação 🏃 🚀" })
    });

routes
    .get('/home', (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ message: "Voce esta na Home 🏃 🚀" })
    });



//TRATAMENTO PARA ROTAS INVALIDAS
routes
    .get('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) })
    .post('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) });


export default routes;