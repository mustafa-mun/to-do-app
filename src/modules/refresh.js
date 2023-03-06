export default function refresh(parent) {
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
}