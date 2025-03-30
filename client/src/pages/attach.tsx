import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AttachPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Attach Page</h1>
                </div>
                <form className="flex flex-col size-64">
                    <input type={"date"} className="mb-3"/>
                    <input className="flex size text-lg border-2 rounded-lg mb-3" placeholder={'할 일의 이름을 입력하세요'}/>
                    <input className="flex size text-lg border-2 rounded-lg mb-3" placeholder={'할 일의 설명을 입력하세요'}/>
                    <button className="flex size text-lg border-2 rounded-lg items-center justify-center" type={"submit"}>SUBMIT</button>
                </form>
            </section>
        </DefaultLayout>
    );
}
