document.getElementById('change-name').addEventListener('click', function () {
      const changeAble = document.getElementById('box-line');
  const changeAbles = changeAble.value;
  
      const finalChange = document.getElementById('final-change');
   finalChange.innerText = changeAbles;

  console.log('new Text',finalChanges)
    })