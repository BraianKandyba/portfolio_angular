import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

    ngOnInit(): void {
        this.handleScroll(); 
    }

    menuOpen = false;
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    closeMenu() {
        this.menuOpen = false;
    }

    
    
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.handleScroll();
    }
    
    
    private isVisible(element: HTMLElement): boolean {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }
    
    private handleScroll(): void {
        const contents = document.querySelectorAll<HTMLElement>('.content');
        contents.forEach(content => {
            if (this.isVisible(content)) {
            content.classList.add('visible');
            } else {
            content.classList.remove('visible');
        }
        });
    }


} 
