export function getToday() {
    
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    const today = `${yyyy}-${mm}-${dd}`
    return today
    
    // return "2022-10-02" // (실제로는 new Date()를 사용해야함)
}