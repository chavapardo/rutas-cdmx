import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #22223b;
  color: #fff;
  text-align: center;
  padding: 1.4rem 0 1rem 0;
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

const FooterLinks = styled.div`
  margin-bottom: 0.6rem;
`;

const FooterLink = styled.a`
  color: #a5b4fc;
  margin: 0 14px;
  text-decoration: underline;
  font-size: 0.98rem;
  &:hover {
    color: #4f46e5;
  }
`;

const SocialLinks = styled.div`
  margin-bottom: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #a5b4fc;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.15s;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    color: #4f46e5;
  }
`;

export const Footer: React.FC = () => (
  <FooterContainer>
    <FooterLinks>
      <FooterLink href="#">Acerca</FooterLink>
      <FooterLink href="#">Contacto</FooterLink>
      <FooterLink href="#">Términos</FooterLink>
    </FooterLinks>
    <SocialLinks>
      <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.012-1.231-.017-2.233-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.47-2.381 1.236-3.221-.123-.305-.535-1.527.117-3.182 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.655.242 2.877.12 3.182.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.476 5.922.43.371.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </SocialIcon>
      <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
          <path d="M24 4.557a9.846 9.846 0 01-2.828.775 4.932 4.932 0 002.164-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.85 2.02-.85 3.17 0 2.188 1.115 4.116 2.823 5.246a4.904 4.904 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.945 13.945 0 007.548 2.209c9.058 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0024 4.557z"/>
        </svg>
      </SocialIcon>
      <SocialIcon href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
          <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.676 0"/>
        </svg>
      </SocialIcon>
      <SocialIcon href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.97.242 2.423.415a4.602 4.602 0 011.675 1.097 4.601 4.601 0 011.097 1.675c.173.453.359 1.217.415 2.423.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.242 1.97-.415 2.423a4.601 4.601 0 01-1.097 1.675 4.601 4.601 0 01-1.675 1.097c-.453.173-1.217.359-2.423.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.97-.242-2.423-.415a4.601 4.601 0 01-1.675-1.097 4.601 4.601 0 01-1.097-1.675c-.173-.453-.359-1.217-.415-2.423C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.056-1.206.242-1.97.415-2.423a4.601 4.601 0 011.097-1.675 4.601 4.601 0 011.675-1.097c.453-.173 1.217-.359 2.423-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072c-1.616.075-2.725.332-3.683.708a6.604 6.604 0 00-2.357 1.515A6.605 6.605 0 00.78 4.369c-.376.958-.633 2.067-.708 3.683C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.075 1.616.332 2.725.708 3.683a6.6 6.6 0 001.515 2.357 6.6 6.6 0 002.357 1.515c.958.376 2.067.633 3.683.708C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.616-.075 2.725-.332 3.683-.708a6.6 6.6 0 002.357-1.515 6.6 6.6 0 001.515-2.357c.376-.958.633-2.067.708-3.683.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.075-1.616-.332-2.725-.708-3.683A6.6 6.6 0 0021.631.78a6.604 6.604 0 00-2.357-1.515C18.316.013 17.207-.075 15.591-.072 14.311-.013 13.902 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
        </svg>
      </SocialIcon>
    </SocialLinks>
    <div>
      © {new Date().getFullYear()} Mi Rutas CDMX. Todos los derechos reservados.
    </div>
  </FooterContainer>
);

export default Footer;