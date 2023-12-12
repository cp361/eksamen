import { createClient } from "@supabase/supabase-js";
import React from "react";

export const supabase2 = createClient(
	'https://wbimsgzgxahhltpbvwlu.supabase.co/rest/v1/contactlist?select=*',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaW1zZ3pneGFoaGx0cGJ2d2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzc3NTAsImV4cCI6MjAxNDg1Mzc1MH0.bR_zj_y7vzf7fvsW-N-6126mAyKquznFzvDur-m-_mw',
);

const supabaseClient = () => {
	return (
		<div>supabaseClient</div>
	)
}

export default supabaseClient