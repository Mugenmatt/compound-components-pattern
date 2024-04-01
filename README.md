# Compound Components

En la sección "Shopping" al entrar, nos muestra 2 Cards.
Cada Card - ProductCard - es un patrón Compound Component, es decir, componentes que tienen componentes dentro (HOC) y que el componente padre le pasa a sus hijos todas las propiedades necesarias sin tener que pasarle (necesariamente) a los hijos algo directamente.
La ProductCard contiene componentes que son ProductImage, ProductTitle y ProductButtons y les pasa la data con context gracias al provider que los envuelve.

## Extensible Styles

Darle estilos al componente de ProductCard de forma dinámica ya que no se puede transferir directamente a los componentes desde el padre. Gracias a esto, podemos usar clases custom (className) y estilos en linea (styles). Esto se ve en las props enviadas al ProductCard.
