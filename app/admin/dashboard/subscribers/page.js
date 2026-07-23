import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminNav from "@/components/AdminNav";

export default async function SubscribersPage() {
  if (!isAdminLoggedIn()) redirect("/admin/login");

  const subscribers = await prisma.subscriber.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <AdminNav />

      <div className="max-w-5xl mx-auto px-4 py-10">

        <h1 className="text-3xl font-bold text-brand-900 mb-8">
          Newsletter Subscribers
        </h1>

        <div className="bg-white rounded-2xl border border-brand-100 overflow-hidden">

          {subscribers.length === 0 ? (

            <p className="p-6 text-brand-900/60">
              এখনো কোনো Subscriber নেই।
            </p>

          ) : (

            <table className="w-full">

              <thead className="bg-brand-50">

                <tr>
                  <th className="text-left p-4">#</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Subscribed At</th>
                </tr>

              </thead>

              <tbody>

                {subscribers.map((subscriber, index) => (

                  <tr
                    key={subscriber.id}
                    className="border-t border-brand-100"
                  >
                    <td className="p-4">
                      {index + 1}
                    </td>

                    <td className="p-4">
                      {subscriber.email}
                    </td>

                    <td className="p-4">
                      {new Date(subscriber.createdAt).toLocaleDateString(
                        "bn-BD",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>
    </div>
  );
}