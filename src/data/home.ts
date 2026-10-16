import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import portrait1 from '../assets/portrait-1.png'
import portrait2 from '../assets/portrait-2.png'
import portrait3 from '../assets/portrait-3.png'

export const heroCopy = [
  'Construimos puentes entre lo inimaginable y lo tangible.',
  'Descubre cómo podemos ayudarte a convertir tu visión en',
  'una experiencia digital memorable.',
]

export const projects = [
  { image: project1, width: 480 },
  { image: project2, width: 672 },
  { image: project3, width: 480 },
  { image: project4, width: 480 },
  { image: project5, width: 672 },
]

export const services = [
  {
    title: 'Strategy',
    text: 'Nos enfocamos en transformar la visión de nuestros clientes en experiencias digitales significativas y efectivas. Diseñamos soluciones que no solo cumplen con las necesidades de los usuarios, sino que también impulsan los objetivos comerciales de nuestros clientes.',
  },
  {
    title: 'Branding',
    text: 'Más que logotipos y colores, creamos identidades coherentes que cuentan historias auténticas y transmiten valores, comprendiendo profundamente la personalidad de la marca para dotarla del impacto y relevancia deseada.',
  },
  {
    title: 'Digital product',
    text: 'Con un enfoque centrado en el usuario, creamos soluciones innovadoras y funcionales tras una exhaustiva investigación de necesidades y comportamientos, asegurando una experiencia excepcional desde el inicio hasta el final del proyecto.',
  },
  {
    title: 'Technology',
    text: 'Valoramos el poder de las herramientas no-code para crear productos digitales eficientes. El no-code forma partes  de nuestra filosofía de trabajo ya que nos permite ofrecer soluciones innovadoras y de alta calidad de manera eficiente y con costes más reducidos.',
  },
]

export const aboutParagraphs = [
  'Somos un equipo de personas apasionadas, comprometidas a transformar marcas. Combinamos limpieza y diseño funcional con enfoque en las necesidades del negocio y metas.',
  'Somos un equipo de personas apasionadas, comprometidas a transformar marcas. Combinamos limpieza y diseño funcional con enfoque en las necesidades del negocio y metas. Somos un equipo de personas apasionadas, comprometidas a transformar marcas. Combinamos limpieza y diseño funcional . . .',
]

export const portraits = [portrait1, portrait2, portrait3]

export const navItems: { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
