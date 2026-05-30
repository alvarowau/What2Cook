<script setup></script>

<template>
  <header class="header-fixed">
    <nav class="navbar">
      <div class="navbar-logo">
        <!-- RouterLink ya se comporta como un <a> -->
        <RouterLink to="/">
          <img src="@/assets/logo.svg" alt="What2Cook Logo" />
        </RouterLink>
      </div>

      <input
        type="text"
        placeholder="Próximamente..."
        disabled
        class="navbar-input-disabled"
      />

      <ul>
        <li><RouterLink to="/">Recetas</RouterLink></li>
        <li><RouterLink to="/despensa">Mi Despensa</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header-fixed {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  /* Opcional: una pequeña sombra para que se note al bajar */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: white; /* Asegúrate de que tenga fondo sólido */
  border-bottom: 1px solid #ececec;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 85px;
  cursor: pointer;

  transition: transform 0.2s ease;
}

.navbar-logo img:hover {
  transform: scale(1.05);
}

.navbar input {
  width: 420px;

  padding: 12px 18px;

  border: none;

  border-radius: 14px;

  background-color: #f5f5f5;

  font-size: 15px;

  outline: none;

  transition: all 0.2s ease;
}

.navbar input:focus {
  background-color: #eeeeee;

  box-shadow: 0 0 0 3px rgba(255, 122, 24, 0.2);
}

.navbar ul {
  display: flex;

  align-items: center;

  gap: 28px;

  list-style: none;
}

.navbar ul li a {
  text-decoration: none;

  color: #2b2d42;

  font-weight: 600;

  transition: color 0.2s ease;
}

.navbar ul li a:hover {
  color: #ff7a18;
}
.router-link-active {
  color: #ff7a18 !important;
}
</style>
