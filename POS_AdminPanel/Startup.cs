using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(POS_AdminPanel.Startup))]
namespace POS_AdminPanel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
