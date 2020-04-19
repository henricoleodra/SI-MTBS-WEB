// Sidebar & Summary
export const compStatusChange = (comp) => {
    return{
        type : comp
    }
}

// ANSWER MTBS
export const AnsTBUChange = (comp, ans) => {
    return{
        type : comp,
        answer : ans
    }
}

// KLASIFIKASI MTBS
export const KlasifikasiTBUChange = (comp, ans) =>{
    return{
        type : comp,
        answer : ans
    }
}