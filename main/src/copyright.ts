const year = document.getElementById('year') as HTMLElement;
const thisYear: number = new Date().getFullYear();
year.textContent = (thisYear as unknown) as string;

// 02:07:00