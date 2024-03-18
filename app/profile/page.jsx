import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/CrearFicha">ficha nueva</Link></li>
          <li><Link href="/modificar_ficha">cargar documento</Link></li>
          <li><Link href="/notificar_paciente">notificar paciente</Link></li>
        </ul>
      </nav>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}

