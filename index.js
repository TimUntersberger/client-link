class ClientLink extends HTMLElement{
	connectedCallback(){
		if(!this.to) throw new Error("Attribute 'to' is not set")
		if(window.location.pathname === this.to) this.classList.add("active")
		window.addEventListener("pathchanged", event => {
			if(window.location.pathname === this.to) this.classList.add("active")
			else this.classList.remove("active")
		});
		const a = document.createElement("a");
		a.addEventListener("click", event => {
			event.preventDefault();
			this.updatePath(this.to);
		});
		a.innerHTML = this.innerHTML;
		this.innerHTML = "";
		this.appendChild(a);
	}

	updatePath(path){
		window.history.pushState(null, null, path);
		window.dispatchEvent(new Event("pathchanged"));
	}

	get to(){ return this.getAttribute("to") }
}

customElements.define("client-link", ClientLink);
