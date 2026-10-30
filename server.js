import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const baseDir = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const app = express();

// Serve static files (CSS, images) from the public folder
app.use(express.static(path.join(baseDir, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(baseDir, 'views'));

// Route handlers
const homePage = (req, res) => {
    res.render('index', { title: 'Home' });
};

const organizationsPage = (req, res) => {
    res.render('organizations', { title: 'Organizations' });
};

const projectsPage = (req, res) => {
    res.render('projects', { title: 'Service Projects' });
};

const categoriesPage = (req, res) => {
    res.render('categories', { title: 'Service Project Categories' });
};

// Routes
app.get('/', homePage);
app.get('/organizations', organizationsPage);
app.get('/projects', projectsPage);
app.get('/categories', categoriesPage);

app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});

