"""An import hook that notices when matplotlib.pyplot is imported, and tells IPython about it.

This avoids IPython hanging if `%matplotlib` is omitted.

This is horrible, and probably nobody should use it.
"""
import sys, os
from IPython import get_ipython

class MatplotlibFinder(object):
    """Import hook that notices when matplotlib.pyplot is imported, and tells IPython about it
    
    This avoids IPython hanging if `%matplotlib` is omitted
    """
    
    def find_module(self, fullname, path=None):
        if fullname != 'matplotlib.pyplot':
            return
        # Don't call me again
        sys.meta_path.remove(self)
        
        ip = get_ipython()
        if ip is None:
            return
        
        if ip.pylab_gui_select:
            return
        
        # default to inline in kernel environments
        if hasattr(ip, 'kernel'):
            print('enabling inline matplotlib')
            ip.enable_matplotlib('inline')
        else:
            print('enabling matplotlib')
            ip.enable_matplotlib()


sys.meta_path.append(MatplotlibFinder())
