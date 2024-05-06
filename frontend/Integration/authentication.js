const companyId = sessionStorage.getItem('companyId');
if(!companyId || companyId === undefined)
{
    window.location.href = 'sign-in.html';
}