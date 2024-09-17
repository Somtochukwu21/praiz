import { useRouter } from "next/router";

export const ProjectPage = () => {
	const router = useRouter();
	const { id } = router.query; // Retrieve the dynamic route param (project ID/slug)
console.log(id)
	// Fetch project data based on the ID/slug (you can use static props or API fetching here)
	return (
		<div>
			<h1>Project: { id }</h1>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam, similique accusantium sint doloremque nam enim, molestias eum dolore voluptatum distinctio rerum, quas esse quia quasi voluptas alias accusamus perspiciatis! Aliquid, iure reiciendis velit itaque reprehenderit rerum provident explicabo eius vel dolores aspernatur quisquam consequuntur. Delectus, at reiciendis! Veniam totam nihil, suscipit porro quas nisi neque quis excepturi animi et minus nulla tempora veritatis maiores expedita reprehenderit, aut optio. Ducimus, soluta reprehenderit. Deleniti officiis molestiae accusamus similique, iure praesentium veritatis, tempora temporibus quidem vitae, sapiente exercitationem fuga iste dolorem? Veritatis fuga voluptate quod dolores animi et labore corrupti, hic illo cum at nihil itaque. Dolore, voluptas incidunt veniam, unde magnam excepturi reprehenderit repudiandae hic dolorem labore sunt. Sit placeat repellat unde voluptates enim obcaecati repudiandae, officiis blanditiis itaque ea accusamus iure aspernatur magnam quisquam non quibusdam veritatis ipsa eum? Ex accusantium sapiente molestiae tempora maiores quis nisi! Earum facilis error fuga tempora deserunt dolor? Nemo voluptas ipsam sapiente architecto inventore id non similique illum saepe molestias aliquam incidunt ut et quod illo repudiandae voluptate a sed pariatur enim dicta, rerum odit eligendi. Distinctio quos id excepturi, atque deleniti iste ad enim, vitae aliquam officia consequatur labore non a temporibus fuga. Quia, dignissimos blanditiis magni illo eveniet, esse est iusto impedit asperiores a assumenda inventore sit explicabo. Esse sequi fuga adipisci velit ut sunt cupiditate optio eius ipsam provident quia eaque tempora veritatis cumque, soluta veniam fugit assumenda, eum ducimus exercitationem iste iusto labore. Officia voluptatum adipisci et, ducimus earum accusamus unde ullam quia ad voluptate quidem vero vitae quam quisquam laborum ut perspiciatis dolorem a? Unde, harum quis distinctio rem inventore nihil nesciunt! Rerum sequi nobis quidem corrupti repellat rem doloremque illum odio eius repellendus, suscipit magnam itaque. Aperiam eius ipsum unde labore, magni itaque fugit tempore quos at facere.
			<div className="bg-red-600">fbhjk</div>
			{/* Render more detailed project information here */}
		</div>
	);
};



