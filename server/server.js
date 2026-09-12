const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// In-Memory Data Storage
const projects = [
  {
    id: "innovault",
    title: "Innovault",
    description: "Gathers all the projects done by NITW students, for better visibility.",
    fullDescription: "Innovault is a centralized repository platform created for students at NIT Warangal. It showcases academic and personal projects, fostering collaboration and visibility across departments.",
    image: "/assets/innovault.jpg",
    techStack: ["Node.js", "React", "MongoDB"],
    link: "https://github.com/"
  },
  {
    id: "stock-management",
    title: "Stock Management",
    description: "Collection of normalised tables required to manage stock flow efficiently.",
    fullDescription: "A robust database system designed to maintain optimal inventory levels. Built using relational database normalization techniques to eliminate redundancy and support fast queries.",
    image: "/assets/stock.jpg",
    techStack: ["DBMS", "Oracle", "SQL"],
    link: "https://github.com/"
  },
  {
    id: "ai-error-tutor",
    title: "AI Error Tutor",
    description: "Local Python application translating compiler errors into explanations.",
    fullDescription: "An AI-assisted developer tool utilizing fine-tuned transformer models and a Streamlit UI to convert dense compiler errors into clear, human-friendly debugging instructions.",
    image: "/assets/ai.png",
    techStack: ["Python", "Streamlit", "Transformers"],
    link: "https://github.com/"
  }
];

const contactSubmissions = [];

// B1. Health Check
app.get('/', (req, res) => {
  res.status(200).json({ status: "ok" });
});

// B2. Serve Project List
app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});

// B3. Serve a Single Project
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.status(200).json(project);
});

// B4. Handle Contact Form Submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required." });
  if (!email) return res.status(400).json({ error: "Email is required." });
  if (!message) return res.status(400).json({ error: "Message is required." });
  if (!email.includes('@')) return res.status(400).json({ error: "Invalid email format." });

  const newSubmission = { id: Date.now(), name, email, message, date: new Date() };
  contactSubmissions.push(newSubmission);
  
  console.log('\n--- New Contact Submission Received ---');
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Total Submissions Stored: ${contactSubmissions.length}`);
  console.log('---------------------------------------\n');

  res.status(201).json({ success: true, message: "Submission received successfully." });
});

// B5. List Submissions
app.get('/api/contact', (req, res) => {
  res.status(200).json(contactSubmissions);
});

// B6. Catch-all 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// B6. Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
