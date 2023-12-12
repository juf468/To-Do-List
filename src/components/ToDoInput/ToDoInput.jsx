const ToDoInput = () => {
	return (
		<div className="mt-6 relative">
			<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
				<span className="border border-gray-500 border-solid p-3 rounded-full">
					{/* <!-- CHECKBOX --> */}
				</span>
			</div>
			<input
				type="text"
				className=" focus:shadow-lg font-inter focus:shadow-blue-600 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
				placeholder="what's next... "
			/>
		</div>
	);
};
export { ToDoInput };
//span sera el 'checkbox'
//absolute: Esta propiedad se utiliza para posicionar un elemento de manera absoluta con respecto
//a su contenedor principal. Esto significa que el elemento se posicionará con referencia a su
//contenedor padre que tenga una propiedad relative, absolute, o fixed.
//inset-y-0 establece la posición superior e inferior (top y bottom) del elemento a 0, es decir,
//lo coloca en los extremos superior e inferior del contenedor al que pertenece.
//pl(padding)-3: Esta clase establece un padding (relleno) de 3 unidades en el lado izquierdo (left) del elemento.
//flex: Establece un contenedor como un elemento flexible. Esto permite que sus elementos secundarios se distribuyan y
//alineen según las reglas de flexbox.
//items-center: Dentro de un contenedor flexible (flex), esta clase alinea los elementos secundarios verticalmente en el centro del contenedor.
//pointer-events-none: Esta propiedad especifica que el elemento no debe recibir eventos del puntero del ratón, es decir, no será clickable ni interactuable con eventos del mouse.

// en el input==>
//pl-12: Establece un relleno (padding) de 12 unidades en el lado izquierdo (left) del eleme
//w-full: Esta clase asigna al elemento un ancho del 100% del contenedor que lo contiene. Hace que el elemento ocupe todo el ancho disponible horizontalmente.
//py-4: Aplica un relleno (padding) de 4 unidades tanto en la parte superior (top) como en la inferior (bottom) del elemento.
//rounded-xl: Este aplica un redondeado a las esquinas del elemento. El -xl sugiere un redondeado más grande,
//outline-none: Elimina el contorno predeterminado del elemento cuando está enfocado. En formularios, esto puede eliminar el resaltado alrededor del elemento cuando se encuentra seleccionado.
// transition-all duration-300 ease-in-out: Establece una transición suave para cualquier cambio en todas las propiedades del elemento con una duración de 300 milisegundos.
// La curva de velocidad ease-in-out define una transición gradual tanto al inicio como al final del cambio.
