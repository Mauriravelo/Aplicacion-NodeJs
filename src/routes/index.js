import { Router } from 'express';
const router = Router()

// Definimos una ruta para la página principal
router.get('/', (req, res) => res.render('index', { title: 'First Web With Node'}));

router.get('/about', (req, res) => res.render('about', {title: 'About me'}));

router.get('/contact', (req, res) => res.render('contact', {title: 'contact page'}));

export default router